import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';
import { AtButton } from 'taro-ui'

export default class Home extends Component {

   config = {
       navigationBarTitleText: '首页3'
    }

    state={}

    componentWillMount () {}
    componentDidMount () {} 
    componentWillReceiveProps (nextProps,nextContext) {} 
    componentWillUnmount () {} 
    componentDidShow () {} 
    componentDidHide () {} 
    componentDidCatchError () {} 
    componentDidNotFound () {} 
    onGetUserInfo = e => {
        const {
            userInfo,
        } = e.detail
        console.log(userInfo)
    }
    render() {
        return (
            <View>
                <AtButton
                  type='primary'
                  circle
                  openType='getUserInfo'
                  onGetUserInfo={this.onGetUserInfo}
                >
                    授权登录
                </AtButton>
            </View>
        );
    }
}