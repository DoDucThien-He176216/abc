import React from "react";
import { WrapperContent, WrapperLableText, WrapperTextPrice, WrapperTextValue } from "./style";
import { Checkbox, Col, Row } from "antd";
import { Rate } from 'antd'
const NavBarComponent = () => {
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((op) => {
          return <WrapperTextValue>{op}</WrapperTextValue>;
        });
      case "checkbox":
        return (
          <div>
            <Checkbox.Group style={{ width: "100%", display: 'flex' , flexDirection: 'column' }}>
            {
                  options.map((op)=>{
                    return(
                      <Checkbox value={op.value}>{op.label}</Checkbox>
                    )
                  })
                 }
                  
                  
               
            </Checkbox.Group>
          </div>
        );

        case "star":
        return (
          <div>
            <Checkbox.Group style={{ width: "100%", display: 'flex' , flexDirection: 'column' }}>
            {
                  options.map((op)=>{
                    return(
                      <div style={{ display: 'inline', gap:'14px'}}>
                          <Rate style={{fontSize:'12px'}} disabled defaultValue={op} />
                          <span>từ {op} sao</span>
                      </div> 
                      
                    )
                  })
                 }
            
            </Checkbox.Group>
          </div>
        );

        case "price":
        return (  
                  options.map((op)=>{
                    return(
                      <WrapperTextPrice >
                          {op}
                      </WrapperTextPrice> 
                      
                    )
                  })
        )
      default:
        return{}
    }
  };
  return (
    <div>
      <WrapperLableText>Label</WrapperLableText>
      <WrapperContent>
          {renderContent("text", ["Tu lanh", "TV", "May tinh"])}
        
      </WrapperContent>
      <WrapperContent>
        {renderContent("checkbox", [
            {value:'a', label:'A'},
            {value:'b', label:'B'},
            {value:'b', label:'B'}
          ])}
      </WrapperContent>
      
      <WrapperContent>
     
        {renderContent("star", [3,4,5])}
      </WrapperContent>
      <WrapperContent>
         <WrapperLableText style={{margin: '0'}}>Giá</WrapperLableText>
         {renderContent("price", ['dưới 40','trên 50'])}
      </WrapperContent>
      


    </div>
  );
};

export default NavBarComponent;
