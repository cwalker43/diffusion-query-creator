import React, {useEffect, useState} from 'react';
import {
    Form,
    Input,
    Slider,
} from 'antd';

const DiffusionForm = () => {
    const defaultNumberOfImages = 1;
    const defaultNumberOfSteps = 50;
    const defaultScale = 7;

    const [output, setOutput] = useState('test');
    const [numberOfImages, setNumberOfImages] = useState(defaultNumberOfImages);
    const [numberOfSteps, setNumberOfSteps] = useState(defaultNumberOfSteps);
    const [scale, setScale] = useState(defaultScale);
    const [query, setQuery] = useState('INSERT QUERY');

    useEffect(() => {
            setOutput(`!dream ${query} -n ${numberOfImages} -s ${numberOfSteps} -C ${scale}`)
        }, [query, scale, numberOfSteps, numberOfImages])

    return (
        <>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
            >
                <Form.Item label="Number of Images" name="imageSlider">
                    <Slider initialValues={defaultNumberOfImages} min={1} max={9} onChange={setNumberOfImages}/>
                </Form.Item>
                <Form.Item label="Steps" name="stepSlider">
                    <Slider initialValues={defaultNumberOfSteps} min={50} max={150} onChange={setNumberOfSteps}/>
                </Form.Item>
                <Form.Item label="CFG Scale" name="cfgSlider">
                    <Slider initialValues={defaultScale} min={7} max={10} onChange={setScale}/>
                </Form.Item>
                <Form.Item label="Query">
                    <Input placeholder="Your Query Here" onChange={(e) => {setQuery(e.target.value)}} />
                </Form.Item>
            </Form>
            <div>
                {output}
            </div>
            <button
                onClick={() =>  navigator.clipboard.writeText(output)}
            >
                Click to Copy
            </button>
        </>
    );
};

export default DiffusionForm;