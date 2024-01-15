import {Row ,Col, Flex, Badge } from 'antd'
import { WrapperHeaders, WrapperHeadersAccount, WrapperHeadersTextSmall, WrapperTextHeader } from './style';
import Search from 'antd/es/transfer/search';
import {
    UserOutlined,CaretDownOutlined,ShoppingCartOutlined
  } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';

const HeaderComponent = () => {
    return (
        <div>
            <WrapperHeaders style={{display: 'flex', alignItems:'center', justifyContent: 'center'}}>
                <Col span={6}>
                   <WrapperTextHeader>LAPTRINHTHATDE</WrapperTextHeader> 
                </Col>
                <Col span={12}>
                <ButtonInputSearch size='large' placeholder='Nhập tìm kiếm' text='Tìm kiếm' />
                </Col>  
                <Col span={6}>
                    <WrapperHeadersAccount style={{ gap: '15px'}}>
                        <UserOutlined style={{ fontSize: '30px'}} />
                        <div>
                            <WrapperHeadersTextSmall>Đăng nhập/Đăng kí</WrapperHeadersTextSmall>
                            <div>
                            <WrapperHeadersTextSmall>Tài khoản</WrapperHeadersTextSmall>
                            <CaretDownOutlined />
                            </div>
                            
                        </div>
                        <div>
                            <Badge count='4' size='small'>
                                <ShoppingCartOutlined style={{ fontSize: '30px',color: 'white'}} /> 
                            </Badge>
                           
                            <WrapperHeadersTextSmall style={{}}>Giỏ hàng</WrapperHeadersTextSmall>
                        </div>
                    </WrapperHeadersAccount>
                    
                
                </Col>
            </WrapperHeaders>
        </div>
    )
}
export default HeaderComponent;