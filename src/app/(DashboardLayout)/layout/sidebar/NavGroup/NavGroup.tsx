import PropTypes from 'prop-types';
// mui imports
import { ListSubheader, styled, Theme } from '@mui/material';

type NavGroup = {
  navlabel?: boolean;
  subheader?: string;
};

interface ItemType {
  item: NavGroup;
  key: Number
}

const NavGroup = ({ item, key }: ItemType) => {
  const ListSubheaderStyle = styled((props: Theme | any) => <ListSubheader disableSticky {...props} />)(
    ({ theme }) => ({
      ...theme.typography.overline,
      fontWeight: '700',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(0),
      color: "#fff",
      lineHeight: '26px',
      padding: '3px 12px',
    }),
  );
  return (
    <ListSubheaderStyle key={key}>{item.subheader}</ListSubheaderStyle>
  );
};

NavGroup.propTypes = {
  item: PropTypes.object,
};

export default NavGroup;
