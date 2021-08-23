// import { useRecordContext } from "react-admin";

// export const PurpleTextField = ({ source }) => {
//   const record = useRecordContext();
//   return <span style={{ backgroundColor: "purple" }}>{record && record[source]}</span>;
// };

import * as React from "react";
import PropTypes from "prop-types";
import { useRecordContext } from "react-admin";

const Edit = (props) => {
  const { source } = props;
  const record = useRecordContext(props);
  return <span style={{ backgroundColor: "yellow" }}>{record[source]}</span>;
};

Edit.propTypes = {
  label: PropTypes.string,
  record: PropTypes.object,
  source: PropTypes.string.isRequired,
};

export default TextField;
