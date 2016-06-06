/**
 * Created by llan on 2016/5/30.
 */
import React from 'react';
import FlatButton from 'material-ui/FlatButton';
const FlatButtonExampleSimple = () => (
    <div>
        <FlatButton label="编辑"/>
        <FlatButton label="添加" primary={true} />
        <FlatButton label="删除" secondary={true}/>
    </div>
);

export default FlatButtonExampleSimple;