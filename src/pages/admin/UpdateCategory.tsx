import React, { useEffect, useState } from 'react'
import { ICategory } from '../../types/Category'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Form, Input } from 'antd'
interface IProps {
    onUpdate: (category: ICategory) => void
    category: ICategory[]
}

const UpdateCategory = (props: IProps) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [category, setCategory] = useState<ICategory>()
    console.log(category)
    useEffect(() => {
        const currentCategory = props.category.find((category: ICategory) => category.id == Number(id))
        setCategory(currentCategory)
    }, [props])
    useEffect(() => {
        setFields()
    }, [category])
    const [form] = Form.useForm();
    const setFields = () => {
        form.setFieldsValue({
            id: category?.id,
            name: category?.name
        })
    }
    const onFinish = (values: any) => {
        console.log(values)
        props.onUpdate(values);
        navigate('/admin/category')
    };
    return (
        <div>
            <Form
                form={form}
                style={{ maxWidth: 600 }}
                onFinish={onFinish}
            >
                <Form.Item
                    label=""
                    name="id"
                    style={{ display: 'none' }}
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label="Category Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your category name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Update Category
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default UpdateCategory