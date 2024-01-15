import styled from 'styled-components'
import ButtonComponent from '../../component/ButtonComponent/ButtonComponent'
export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    border-bottom: 1px solid red;
    height: 44px
`
export const WrapperButton = styled(ButtonComponent)`
    &:hover{
      
        background-color: rgb(13,92,182);
         span{
                 color: #fff;
             }
    }
    
`

export const WrapperProduct = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 15px;
    margin-top: 15px;
    flex-wrap:  wrap;
    
`

