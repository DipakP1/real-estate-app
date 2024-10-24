import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars-2';

import { Box, useTheme } from '@mui/material';

interface ScrollbarProps {
  className?: string;
  children?: ReactNode;
}

const Scrollbar: FC<ScrollbarProps> = ({ className, children, ...rest }) => {
  const theme :any= useTheme();

  return (
    <Scrollbars
      autoHide
      universal
      renderThumbVertical={() => {
        return (
          <Box
            sx={{
              width: 5,
              background: "#fff",
              borderRadius: "5px",
              transition: "ease-in-out",
              '&:hover': {
                background: `#fff`
              }
            }}
          />
        );
      }}
      {...rest}
    >
      {children}
    </Scrollbars>
  );
};

Scrollbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Scrollbar;
