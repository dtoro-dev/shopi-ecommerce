import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return <div className="flex flex-col mt-16 items-center">{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
