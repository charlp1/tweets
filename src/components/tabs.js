import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
} from 'reactstrap';
import classnames from 'classnames';

class Tabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        const state = this.state;
        const navItems = this.props.tabs.map(
            tab => (
                <NavItem key={ tab.id }>
                    <NavLink
                        className={
                            classnames({
                                active: state.activeTab === tab.id
                            })
                        }
                        onClick={
                            () => this.toggle(tab.id)
                        }
                    >
                        { tab.label }
                    </NavLink>
                </NavItem>
            )
        );
        const tabPanes = this.props.tabs.map(
            tab => (
                <TabPane
                    key={ tab.id }
                    tabId={ tab.id }
                >
                    { tab.content }
                </TabPane>
            )
        );

        return (
            <div className='m-auto h-50'>
                <Nav
                    tabs
                    className='justify-content-center'
                >
                    { navItems }
                </Nav>
                <TabContent
                    activeTab={ this.state.activeTab }
                >
                    { tabPanes }
                </TabContent>
            </div>
        );
    }
};

Tabs.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            content: PropTypes.node,
        })
    ),
};

export default Tabs;
