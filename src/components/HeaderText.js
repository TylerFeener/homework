const styles = {
  header: {
    fontWeight: "bold",
    marginLeft: 50,
  },
};

function HeaderText(props) {
  const { text, childStyle } = props;
  return <p style={childStyle}>{text}</p>;
}

export default HeaderText;
