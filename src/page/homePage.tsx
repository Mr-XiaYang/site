import {inject, Observer, observer} from "mobx-react";
import React from "react";
import Box from "@material-ui/core/Box";
import AppBar from "../layout/appBar";
import Background from "../layout/background";
import Typography from "@material-ui/core/Typography";
import AppStore from "../store/appStore";
import propsWrapper from "../hoc/propsWrapper";

type Props = {} & InjectProps;

type InjectProps = {
    appStore: AppStore
}

@inject('appStore') @observer
class HomePage extends React.PureComponent<Props> {

    render() {
        return (
            <Background>
                <AppBar/>
                <Observer>{() => (
                    <Box>
                        <Typography variant="h1">牛羊成群</Typography>
                        <Typography variant="h1">离群索居者为野兽</Typography>
                    </Box>
                )}</Observer>
                <Box>
                    文章类型图
                </Box>
                <Box>
                    各种链接
                </Box>
                <Box>
                    注册证
                </Box>
            </Background>
        );
    }
}

export default propsWrapper<Props, InjectProps>(HomePage);
