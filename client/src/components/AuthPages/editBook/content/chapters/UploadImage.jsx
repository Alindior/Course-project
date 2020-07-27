import React, { useState } from 'react';

import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

export const UploadImage = ({ addImage, currentImage }) => {
    const [loading, setLoading] = useState(false);
    const handleChange = info => {
        const { status, response } = info.file;
        if (status === 'uploading') {
            setLoading(true)
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, imageUrl => {
                setLoading(false);
                addImage(response);
            }
            );
        }
    };
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div className="ant-upload-text">Upload</div>
        </div>
    );
    return (
        <Upload
            name="image"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="/api/upload"
            beforeUpload={beforeUpload}
            onChange={handleChange}
        >
            {currentImage ? <img src={currentImage} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
        </Upload>
    );
}