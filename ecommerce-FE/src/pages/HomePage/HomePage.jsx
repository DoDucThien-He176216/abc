import SliderComponent from "../../component/SliderComponent/SliderComponent"
import TypeProduct from "../../component/TypeProduct/TypeProduct"
import { WrapperButton, WrapperProduct, WrapperTypeProduct } from "./style"
import slider1 from '../../assets/images/slider1.webp';
import slider2 from '../../assets/images/slider2.webp';
import slider3 from '../../assets/images/slider3.webp';
import CardComponent from "../../component/CardComponent/CardComponent";
import NavBarComponent from "../../component/NavBarComponet/NavBarComponent";
import ButtonInputSearch from "../../component/ButtonInputSearch/ButtonInputSearch";
import ButtonComponent from "../../component/ButtonComponent/ButtonComponent";
const HomePage = ()=>{
    const arr =  ['TV','Tu Lanh','LapTop']
    return(
        <>
            <div style={{padding:'0px 120px'}}>
            <WrapperTypeProduct>
            {
            arr.map((item)=>{
                return(
                    <TypeProduct name={item} key={item}/>
                )
            })
        }
            </WrapperTypeProduct> 
            </div>    
            <div id="container" style={{backgroundColor:'#efefef',padding: '0px 120px',height:'1000px'}}>
                <SliderComponent arr={[slider1,slider2,slider3]}/>
                <WrapperProduct>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    
                </WrapperProduct>
                <div style={{width:'100%', display:'flex',gap: '30px', marginTop: '10px', justifyContent:'center' }}>
                    <WrapperButton textbutton="Xem thêm" type="outLine" styleButton={{
                        border: '1px  solid rgb(11,116,229)', color: 'rgb(11,116,229)',
                        width: '240px', height: '38px',borderRadius: '4px'}} 
                        styleTextButton={{fontWeight: 500}}
                />
                </div>
                
            </div>
           
            
        </>
        
    )
}
export default HomePage