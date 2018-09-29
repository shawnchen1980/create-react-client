import React,{Component} from 'react';
import {Swipe,SwipeItem} from 'swipejs/react';
import SpellTest from './SpellTest';
import 'swipejs/style.css';

class TestSuite extends Component {
  handleClick(){}
  handleCallback(){}
  onTransactionEnd(){ }
  render(){
    return <Swipe className='custom-swipe-container-class'
               ref='swipe'
               startSlide={0}
               speed={300}
               auto={0}
               draggable={false}
               continuous={true}
               autoRestart={false}
               disableScroll={false}
               stopPropagation={false}
               callback={this.handleCallback}
               transitionEnd={this.onTransactionEnd}>
          <SwipeItem className='custom-swipe-item-class'
                     onClick={this.handleClick}>
            <SpellTest word="hello" hint="你好" />
          </SwipeItem>
          <SwipeItem className='custom-swipe-item-class'
                     onClick={this.handleClick}>
            <SpellTest word="world" hint="世界" />
          </SwipeItem>
          <SwipeItem className='custom-swipe-item-class'
                     onClick={this.handleClick}>
            <SpellTest word="boy" hint="男孩" />
          </SwipeItem>
        </Swipe>
  }
}

export default TestSuite;