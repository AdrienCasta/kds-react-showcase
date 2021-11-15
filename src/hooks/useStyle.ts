const useStyles = () => {
  const concat = (...styles: (string | boolean)[]) =>
    styles.filter(Boolean).join(" ");
  return {
    concat,
  };
};

export default useStyles;
