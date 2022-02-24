const styles = {
  selectedText: {
    marginLeft: 0,
    fontFamily: "helvetica",
  },
};

const SelectedItemCounter = (props) => {
  const { count } = props;
  return (
    <h3 style={styles.selectedText}>
      {count > 0 ? `${count} Selected` : "None Selected"}
    </h3>
  );
};

export default SelectedItemCounter;
