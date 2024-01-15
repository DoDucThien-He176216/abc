import React from 'react'
import NavBarComponent from '../../component/NavBarComponet/NavBarComponent'
import CardComponent from '../../component/CardComponent/CardComponent'
import { Col, Pagination, Row } from 'antd'
import { WrapperNavBar, WrapperProduct } from './style'

const TypeProductPage = () => {
  return (
    <div style={{padding:'0 120px',background: '#efefef'}}>
      <Row style={{paddingTop: '10px', flexWrap: 'nowrap'}} > 
        <WrapperNavBar span={4} >
            <NavBarComponent/>
        </WrapperNavBar>
        <Col span={20}>
        <WrapperProduct >
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
        </WrapperProduct>
            <Pagination
                  total={85}
                  showTotal={(total) => `Total ${total} items`}
                  defaultPageSize={10}
                  defaultCurrent={1} style={{textAlign:'center', marginTop: '10px'}}/>
                
        </Col>
    
    </Row>
      
    </div>
    
  )
}

export default TypeProductPage