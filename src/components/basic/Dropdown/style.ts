import styled from '@emotion/styled';
import ArrowUp from '@src/assets/images/ico_arrow_up.svg';
import ArrowDown from '@src/assets/images/ico_arrow_down.svg';

interface StatusProps {
  isOpen: boolean;
}

interface ItemProps {
  current: boolean;
  last: boolean;
}

const DropdownWrapper = styled.div<StatusProps>`
  display: flex;
  position: relative;
  width: 80px;
  height: 30px;
  border: 1px solid ${(props) => (props.isOpen ? '#023e8a' : '#9d9d9d')};
  border-radius: ${(props) => (props.isOpen ? '4px 4px 0 0' : '4px')};
  &:hover {
    border: 1px solid #023e8a;
    cursor: pointer;
  }
`;

const DropdownSelected = styled.div`
  display: flex;
  flex: 4;
  justify-content: center;
  align-items: center;
`;

const DropdownIcon = styled.i<StatusProps>`
  display: inline-block;
  flex: 1;
  width: 24px;
  height: 24px;
  margin: auto 4px auto 0px;
  background: ${(props) =>
    props.isOpen
      ? `url(${ArrowUp}) no-repeat center center`
      : `url(${ArrowDown}) no-repeat center center`};
`;

const DropdownItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DropdownItems = styled.div<ItemProps>`
  display: flex;
  background-color: ${(props) => (props.current ? 'rgb(2, 62, 138, 0.6)' : 'white')};
  color: ${(props) => (props.current ? 'white' : 'black')};
  width: 80px;
  height: 30px;
  border: 1px solid #023e8a;
  border-top: 0;
  border-radius: ${(props) => (props.last ? '0 0 4px 4px' : '0')};
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #023e8a;
  }
`;

export { DropdownWrapper, DropdownSelected, DropdownIcon, DropdownItems, DropdownItemWrapper };
