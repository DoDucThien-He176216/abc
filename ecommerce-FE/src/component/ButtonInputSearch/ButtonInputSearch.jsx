import { Button,Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const ButtonInputSearch = (props)=>{
    const {size,placeholder,text} = props;
    return(
        <div style={{ display: 'flex' }}>
           <Input size={size} placeholder={placeholder}  style={{borderRadius: '0',height: '30px'}} />
           <Button size={size} icon={<SearchOutlined/>} bordered={false} style={{borderRadius: '0',height: '30px',backgroundColor:'#105bb7', border:'none',padding:'2px',paddingRight:'15px'}} ><span style={{color:'white', fontSize: '15px'}}>{text}</span></Button>
        </div>
    )
}
export default ButtonInputSearch;
