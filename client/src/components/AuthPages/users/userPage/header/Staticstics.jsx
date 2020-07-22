import React from "react";

import { Statistic, Row, Col } from 'antd';
import { LikeOutlined } from '@ant-design/icons';

export const Statistics = () => {
    return (
        <div className="home__statisctic">
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic title="Книги" value={1} />
                </Col>
                <Col span={12}>
                    <Statistic title="Средний рейтинг" value={5.5} />
                </Col>
            </Row>
        </div>
    )
}