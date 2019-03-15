import React from 'react';
import successfulTestDataStore from './data.json';
import { timingSafeEqual } from 'crypto';
import Alert from './Alert.js';

class AVLWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.getData(),
            testDescription: '',
        };
    }

    render() {
        if (!this.state.data) {
            return (
                <div className="welcome">
                    <h2>SortingTestsTG.java</h2>
                    {/* <p>To get started, download the tests from <a href="https://github.gatech.edu/gist/tgalloway7/68db1a275ed8899469a2b055e4b96247">the Georgia Tech GitHub</a> (must be logged in).</p> */}
                    <p><a href="/?test=MS4wOjAuMDI6M3wxOjJ8Mzo0fDI6M3x8NDo1fHw1OjZ8NDo1fDM6NHx8Njo3fHw3Ojh8Njo3fDU6Nnx8ODo5fDc6OHw2Ojc=">Example</a></p>
                    <br />
                    <p>Use the visualizer for your own implementation:
                        <code><pre>
                            {
                                `
                                // coming soon
                                `
                            }
                        </pre></code>
                    </p>
                </div>
            )
        }
        return (
            <div className="avl-widget">
                { this.state.data.version < 1.0 &&
                            <Alert type="primary" text={
                                ["A new version of SortingTestsTG has been released (1.0). You can download them from ",
                                <a href='https://github.gatech.edu/gist/tgalloway7/68db1a275ed8899469a2b055e4b96247'>the Georgia Tech GitHub.</a>]}>
                            </Alert>
                }
                <h4 className="error">Failed: Test {this.state.data.testId} - { this.state.data.successfulTestData ? this.state.data.successfulTestData.desc : ''}</h4>
                <div className="row avl-row">
                <div className="col-md-6">
                        <h6>Your sort:</h6>
                        {/* <AVLTree treeObject={ this.state.data.treeObject } name="testTree" width="600" height="500"></AVLTree> */}
                    </div>
                </div>
            </div>
        )
    }

    getData() {
        const href = window.location.href;
        const endInformation = window.location.href.substr(href.lastIndexOf('/'));
        if (endInformation.indexOf('?test=') > -1) {
            const dataString = atob(endInformation.substr(7));
            const dataArray = dataString.split(':');
            const treeString = dataArray[2];
            const treeObject = this.recursiveBuildNode(treeString);
            var dataObj = {
                version: parseFloat(dataArray[0]),
                testId: dataArray[1],
                treeObject: treeObject,
            }
            var passedData = this.getSuccessfulTestData(dataObj);
            if (passedData) {
                dataObj.successfulTestData = this.getSuccessfulTestData(dataObj)
            }
            console.log(dataObj);
            return dataObj;
        } else {
            return null;
        }
    }

    getSuccessfulTestData(dataObj) {
        if (dataObj) {
            const successfulTestData = successfulTestDataStore[dataObj.testId];
            if (!successfulTestData) {
                return null;
            }
            successfulTestData.treeObject = this.recursiveBuildNode(successfulTestData.string.split(':')[2]);
            return successfulTestData
        } else {
            return null;
        }
    }

    recursiveBuildNode(nodeString) {
        console.log(nodeString);
        if (!nodeString) {
            return { value: -1, name: '', children: null };
        }
        // [6,1,0,0-|]
        const nodeData = nodeString.substr(1, nodeString.length - 2);
        // 6,1,0,0-|
        const intrinsicData = nodeData.substr(0, nodeData.indexOf('+')).split(',');
        var node = {
            value: intrinsicData[0] + '',
            name: intrinsicData[0],
            height: parseInt(intrinsicData[1]),
            bf: parseInt(intrinsicData[2]),
            children: []
        }
        const childData = nodeData.substr(nodeData.indexOf('+') + 1, nodeData.length - 1);
        var leftChildString = '';
        var rightChildString = '';
        var splitIndex = 0;
        if (childData[0] != '|') {
            leftChildString = '[';
            var index = 1;
            var balance = 1;
            while (balance != 0) {
                leftChildString += childData[index];
                if (childData[index] == '[') {
                    balance++;
                }
                if (childData[index] == ']') {
                    balance--;
                }
                index++;
            }
            splitIndex = index;
        }
        if (childData.substr(splitIndex).length > 1) {
            rightChildString = childData.substr(splitIndex + 1);
        }
        node.children.push(this.recursiveBuildNode(leftChildString));
        node.children.push(this.recursiveBuildNode(rightChildString));

        if (node.children.length == 0) {
            node.children = null;
        }
        return node;
    }

  }

  export default AVLWidget;