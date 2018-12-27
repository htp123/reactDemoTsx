import * as React from 'react';

export interface IProps {
    name: string;
    enthusiasmLevel?: number; // 可选参数
  }
  
  // 函数方式
  function Hello({ name, enthusiasmLevel = 1 }: IProps) { // enthusiasmLevel 默认值
    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }
  
    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
      </div>
    );
  }
  
  export default Hello;
  
  // helpers
  
  function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
  }

/*
  class Hello extends React.Component<Props, object> {
    render() {
      const { name, enthusiasmLevel = 1 } = this.props;
  
      if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
      }
  
      return (
        <div className="hello">
          <div className="greeting">
            Hello {name + getExclamationMarks(enthusiasmLevel)}
          </div>
        </div>
      );
    }
  }
  */