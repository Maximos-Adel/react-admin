// import { useRecordContext } from "react-admin";

// export const PurpleTextField = ({ source }) => {
//   const record = useRecordContext();
//   return <span style={{ backgroundColor: "purple" }}>{record && record[source]}</span>;
// };


import * as React from "react";
import PropTypes from "prop-types";
import { useRecordContext } from "react-admin";

const TextField = (props) => {
  const { source } = props;
  const record = useRecordContext(props);
  return <span style={{backgroundColor:"red",borderRadiuss:"5px",color:"white"}}>{record[source]}</span>;
};

TextField.propTypes = {
  label: PropTypes.string,
  record: PropTypes.object,
  source: PropTypes.string.isRequired,
};

export default TextField;
