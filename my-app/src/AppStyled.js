import styled from 'styled-components';

export const CatalogTitle = styled.div`
  background: #ffffff;
  width: 945px;
  margin: auto; 
  padding: 0 0 0 7px;
  .catalogHeaderTitle {
    font-size: 30px;
    color: #444; 
    font-weight: 700;
  }
`

export const CatalogItemContent = styled.div`
  display: flex;
  width: calc(50%);
  margin: auto;
  justify-content: space-between;
  flex-wrap: wrap;
  .cardBox {
    background: #ffffff;
    padding: 20px;
    margin-bottom: 20px;
  }
  .catalogItemName {
    color: #444;
    font-size: 17px;
    font-weight: 700;
    width: 219px;
  }
  .catalogItemPrice {
    font-size: 20px;
    font-weight: 700;
    color: #444; 
  }
  .ItemButton {
    width: 145px;
    margin: auto;
  }
  .catalogItemButton {
    color: #444;
    background: #e9bb05;
    padding: 10px 50px;
    font-size: 13px;
    font-weight: 700;
    border-radius: 9px;
    border: none; 
    margin: auto;
  }
  .catalogItemCountry {
    color: #444;
    font-size: 14px;
    font-weight: 700;
  }
  .catalogItemDescription {
    width: 219px;
    color: #444;
    font-size: 17px;
  }
`