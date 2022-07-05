import React from 'react'
import {Select,Row,Col,Space} from 'antd';

export const Select = () => {
  return (
    <div>
         <Space direction="vertical" size="middle" style={{ display: "flex", marginTop:10 }}>
          <Row>
                <Col span={8}>
                <Select
                    size="large"
                    style={{ width: 250 }}
                    onChange={handleChange}
                    placeholder="Deparment"
                >
                    {jobsOpen?.length > 0 ? jobsOpen.map((data) => (
                        <Option key={data.id} value={data.department.title}>
                            {data.department.title}
                        </Option>
                        // console.log(data.department);
                        ))
                    : "no data"}
                </Select>
                </Col>
             </Row>
        </Space>
    </div>
  )
}
