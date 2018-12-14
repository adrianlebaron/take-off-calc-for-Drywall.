class CalculatorKey extends React.Component {
  render() {
    const { onPress, className, ...props } = this.props
    
    return (
      <PointTarget onPoint={onPress}>
        <button className={`calculator-key ${className}`} {...props}/>
      </PointTarget>
    )
  }
}

const CalculatorOperations = {
  '/': (prevValue, nextValue) => prevValue / nextValue,
  '*': (prevValue, nextValue) => prevValue * nextValue,
  '+': (prevValue, nextValue) => prevValue + nextValue,
  '-': (prevValue, nextValue) => prevValue - nextValue,
  '=': (prevValue, nextValue) => nextValue
}