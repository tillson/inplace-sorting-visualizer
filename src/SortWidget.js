import React from 'react';
import successfulTestDataStore from './data.json';
import Alert from './Alert.js';
import SortVisualization from './SortVisualization.js';

class SortWidget extends React.Component {
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
                    <p><a href="/?test=MS4wOjEuMD05OjF8NDoxfDk6Mnw0OjJ8fDk6N3x8OTozfDc6M3w0OjN8fDk6OHx8OTo1fDg6NXw3OjV8fDk6Nnw4OjZ8Nzo2">Example</a></p>
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
            <div className="sort-widget">
                { this.state.data.version < 1.0 &&
                            <Alert type="primary" text={
                                ["A new version of SortingTestsTG has been released (1.0). You can download them from ",
                                <a href='https://github.gatech.edu/gist/tgalloway7/68db1a275ed8899469a2b055e4b96247'>the Georgia Tech GitHub.</a>]}>
                            </Alert>
                }
                <h4 className="error">Failed: { this.state.data.successfulTestData ? this.state.data.successfulTestData.desc : ''}</h4>
                <div className="row avl-row">
                <div className="col-md-9">
                        <h6>Here's what your implementation does:</h6>
                        <SortVisualization data={ this.state.data } name="testSort" width="600" height="200"></SortVisualization>
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
            var meta = dataString.split('=')[0].split(':');
            var dataObj = {
                version: parseFloat(meta[0]),
                testId: meta[1],
                operations: dataString.split('=')[1].split('|'),
                // initialData: treeObject,
                // mutations:
            }
            var passedData = this.getSuccessfulTestData(dataObj);
            if (passedData) {
                dataObj.workingArray = passedData.initial;
                dataObj.successfulTestData = this.getSuccessfulTestData(dataObj)
            }
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
            return successfulTestData
        } else {
            return null;
        }
    }

  }

  export default SortWidget;