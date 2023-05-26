interface Props {
  prop1: string;
  prop2: string;
}

const func = (props: Props) => {
  console.log("Prop1", props.prop1);
  console.log("Prop2", props.prop2);
  return props.prop1;
};

export default func;
