const styles = {
  header: {
    fontWeight: "bold",
    marginLeft: 50,
  },
};

function HeaderText(props) {
  const { text } = props;
  return <p style={styles.header}>{text}</p>;
}

export default HeaderText;
