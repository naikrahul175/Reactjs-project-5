import React, { useState, useEffect } from "react";
import { Row, Col, Space, Input, Select } from "antd";
import "antd/dist/antd.css";

const { Search } = Input;
const { Option } = Select;

export const List = () => {
  const [jobsOpen, setJobsOpen] = useState([]);
  const [filter, setFilter] = useState([]);
  const [clearFlag, setClearFlag] = useState(true);
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    fetchJobOpenings();
  }, []);

  const fetchJobOpenings = () => {
    fetch(`https://teknorix.jobsoid.com/api/v1/jobs`)
      .then((res) => {
        if (!res.ok) {
          console.log("Error in the network");
        }
        return res.json();
      })
      .then((data) => {
        setJobsOpen(data);
        //   console.log(data);
      })
      .catch((error) => {
        console.log("There has been a error in your fetch operation", error);
      });
  };

  const displayJobs =() => {
      const array = [];
       array = filter.filter(obj => (obj['Engineering']).includes(jobsOpen))

    if (array.length == 0) {
      console.log(array.length);
    } else
         console.log(array.length);
  }

  const getDepartmentFilterData = (jobsOpen) => {
        // needs to implement these
  }

  const handleChange =(value) =>{
        let result = [...filter, value];
      if(result ==='') {
        setFilter([]);
      } else {
        setFilter(result);
        setClearFlag(true)
      }
      // console.log(result);
  }

  
  const handleClear =() => {
        setClearFlag(false)
  }

  const onSearch = () =>{
     let array = [];
    array = jobsOpen.filter(obj => (obj.department.title).includes(filter)|| (obj.location.state).includes(filter)|| (obj.function.title).includes(filter))
     setDisplay(array);

 if (array.length == 0) {
   console.log("empty");
 } else
       console.log(display);
      // console.log(array);

  } 

  // console.log(jobsOpen);
  return (
    <div className="List">
      <div className="list-top" style={{ margin:10,padding: 50, background: "lightblue" }}>
        {/* <Space> */}
        <Row>
          <Col span={24}>
            <Search
              placeholder="input search text"
              onSearch={onSearch}
               enterButton
              // onClick={displayJobs}
            />
          </Col>
        </Row>
        <Space direction="vertical" size="middle" style={{ display: "flex" }}>
          <Row>
            <Col span={8}>
              <Select size="large" style={{ width: 250 }} onChange={handleChange} >
                {jobsOpen?.length>0? jobsOpen.map((data) => (
                      <Option key={data.id} value={data.department.title} >
                        {data.department.title}
                      </Option>
                      // console.log(data.department);
                    ))
                  : "no data"}
              </Select>
            </Col>
            <Col span={8}>
              <Select size="large" style={{ width: 250 }}  onChange={handleChange}>
                {jobsOpen?.length>0? jobsOpen.map((data) => (
                      <Option key={data.id} value={data.location.state}>
                         {data.location.state}
                      </Option>
                      // console.log(data.location);
                    ))
                  : "no data"}
              </Select>
            </Col>
            <Col span={8}>
              <Select size="large" style={{ width: 250 }}  onChange={handleChange}>
                {jobsOpen?.length>0? jobsOpen.map((data) => (
                      <Option key={data.id} value={data.function.title}>
                         {data.function.title}
                      </Option>
                      // console.log(data.funtion);
                    ))
                  : "no data"}
              </Select>
            </Col>
          </Row>
        </Space>
        {/* </Space> */}
      </div>
      { filter.length >0?
      <div className="list-middle" style={{ margin:10, padding: 20, background:"lightblue" }}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}>
            {/* <Col className="gutter-row" span={5}> */}
              { clearFlag && filter?.length>0? filter.map((el,index) => ( 
              <Select mode="multiple"  allowClear style={{width:'200px'}} key={index+1} defaultValue={el}  onClear={handleClear}/ >
              ))
              : 'Select again'
              }
            {/* </Col> */}
          </Row>
      </div>
       :''
      }
    </div>
  );
};
