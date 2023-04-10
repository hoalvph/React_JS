import React, { useState } from 'react'
// import { useForm, SubmitHandler } from 'react-hook-form' //import useForm hook
import { ICategory } from '../../types/Category'
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
interface IProps {
    onAdd: (category: ICategory) => void
}

const AddCategory = (props: IProps) => {
    const navigate = useNavigate();
    const onFinish = (values: any) => {
        console.log(values);
        // const newCategory = {
        //     id: values.id,
        //     name: values.name,
        // }
        props.onAdd(values)
        navigate('/admin/categories')
    };


    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Category name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your category name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddCategory