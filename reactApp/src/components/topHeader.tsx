import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import $ from 'jquery';
import history from '../history';
import {smoothlyMenu} from '@helpers/theme';
import {logout} from '@helpers/auth';
import {bindActionCreators} from '@reduxjs/toolkit';
import {UserAction} from '@redux/actions';
import {connect} from 'react-redux';
import { useDispatch } from 'react-redux';

const TopHeader = () => {

   function  toggleNavigation(e){
        e.preventDefault();
        $('body').toggleClass('mini-navbar');
        smoothlyMenu();
    }

    const dispatch = useDispatch();
        return (
            <div className="row border-bottom">
                <nav className="navbar navbar-static-top" role="navigation" style={{marginBottom: 0}}>
                    <div className="navbar-header">
                        <span className="navbar-minimalize minimalize-styl-2 btn btn-primary" onClick={(e) => toggleNavigation(e)} style={{cursor: 'pointer'}}>
                            <i className="fa fa-bars" />
                            {' '}
                        </span>
                        <form role="search" className="navbar-form-custom" method="post" action="#">
                            <div className="form-group">
                                <input type="text" placeholder="Search for something..." className="form-control" name="top-search" id="top-search" />
                            </div>
                        </form>
                    </div>
                    <ul className="nav navbar-top-links navbar-right">
                        <li>
                            <span className="m-r-sm text-muted welcome-message">Welcome to Get Hired.</span>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                                <i className="fa fa-envelope" />
                                {' '}
                                <span className="label label-warning">16</span>
                            </a>
                            <ul className="dropdown-menu dropdown-messages">
                                <li>
                                    <div className="dropdown-messages-box">
                                        <a href="profile.html" className="pull-left">
                                            {/* <img alt="" className="img-circle logo" src={a7} /> */}
                                        </a>
                                        <div className="media-body">
                                            <small className="pull-right">46h ago</small>
                                            <strong>Mike Loreipsum</strong>
                                            {' '}
                      started following
                      <strong>Monica Smith</strong>
                      .
                      <br />
                                            <small className="text-muted">3 days ago at 7:58 pm - 10.06.2014</small>
                                        </div>
                                    </div>
                                </li>
                                <li className="divider" />
                                <li>
                                    <div className="dropdown-messages-box">
                                        <a href="profile.html" className="pull-left">
                                            {/* <img alt="" className="img-circle logo" src={a4} /> */}
                                        </a>
                                        <div className="media-body ">
                                            <small className="pull-right text-navy">5h ago</small>
                                            <strong>Chris Johnatan Overtunk</strong>
                                            {' '}
                      started following
                      <strong>Monica Smith</strong>
                      .
                      <br />
                                            <small className="text-muted">Yesterday 1:21 pm - 11.06.2014</small>
                                        </div>
                                    </div>
                                </li>
                                <li className="divider" />
                                <li>
                                    <div className="dropdown-messages-box">
                                        <a href="profile.html" className="pull-left">
                                            {/* <img alt="" className="img-circle logo" src={profile} /> */}
                                        </a>
                                        <div className="media-body ">
                                            <small className="pull-right">23h ago</small>
                                            <strong>Monica Smith</strong>
                                            {' '}
                      love
                      <strong>Kim Smith</strong>
                      .
                      <br />
                                            <small className="text-muted">2 days ago at 2:30 am - 11.06.2014</small>
                                        </div>
                                    </div>
                                </li>
                                <li className="divider" />
                                <li>
                                    <div className="text-center link-block">
                                        <Link to="/app/inbox">
                                            <i className="fa fa-envelope" />
                                            {' '}
                                            <strong>Read All Messages</strong>
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                                <i className="fa fa-bell" />
                                {' '}
                                <span className="label label-primary">8</span>
                            </a>
                            <ul className="dropdown-menu dropdown-alerts">
                                <li>
                                    <a href="mailbox.html">
                                        <div>
                                            <i className="fa fa-envelope fa-fw" />
                                            {' '}
                      You have 16 messages
                      <span className="pull-right text-muted small">4 minutes ago</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="divider" />
                                <li>
                                    <a href="profile.html">
                                        <div>
                                            <i className="fa fa-twitter fa-fw" />
                                            {' '}
                      3 New Followers
                      <span className="pull-right text-muted small">12 minutes ago</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="divider" />
                                <li>
                                    <a href="grid_options.html">
                                        <div>
                                            <i className="fa fa-upload fa-fw" />
                                            {' '}
                      Server Rebooted
                      <span className="pull-right text-muted small">4 minutes ago</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="divider" />
                                <li>
                                    <div className="text-center link-block">
                                        <a href="notifications.html">
                                            <strong>See All Alerts </strong>
                                            <i className="fa fa-angle-right" />
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a onClick={() => dispatch(UserAction.logOutAction())}>
                                {' '}
                                <i className="fa fa-sign-out" />
                                {' '}
                Logout
              </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );


}

export default TopHeader
