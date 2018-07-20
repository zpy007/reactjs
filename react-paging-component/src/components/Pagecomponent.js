/*
 *
 */ 

import React , { Component } from 'react';
import './Pagecomponent.css';

class Pagecomponent extends Component{
    constructor(props){
        super(props);
        this.state={
            currentPage: 1, //当前页码
            groupCount: 5, //页码分组，显示7个页码，其余用省略号显示
            startPage: 1,  //分组开始页码
            totalPage:14 //总页数
        }
        this.createPage=this.createPage.bind(this);
    }
    prePageHandler(){
        let {currentPage} = this.state;
        if(--currentPage===0){
            return false;
        }
        this.pageClick(currentPage);
    }
    pageClick(currentPage){

    }
    nextpagehandler(){
        let {currentPage,totalPage}=this.state;
        if(++currentPage>totalPage){
            return false;
        }
        this.pageClick(currentPage);
    }
    createPage(){
        const {currentPage,groupCount,startPage,totalPage}=this.state;
        let pages=[];
        pages.push(
        <li className={currentPage===1?'nomore':null} 
            onClick={this.prePageHandler.bind(this)} 
            key={0}>
            上一页
        </li>);

        if(totalPage<=10){
            for(let i=1;i<=totalPage;i++){
                pages.push(
                <li className={currentPage===i?'activePage':null} onClick={this.pageClick.bind(this,i)} key={i}>
                    {i}
                </li>);
            }
        }else{
            //部分显示//
            pages.push(
                <li className={currentPage===1?'activePage':null} key={1} onClick={this.pageClick.bind(this,1)}>
                    1
                </li>
            );

            let pageLength=0;
            if(groupCount+startPage>totalPage){
                pageLength=totalPage;
            }else{
                pageLength=groupCount+startPage;
            }

            if(currentPage>=groupCount){
                pages.push(
                    <li className='' key={-1}>
                        ...
                    </li>
                );
            }

            for(let i=startPage;i<=pageLength;i++){
                if(i<=totalPage-1 && i>1){
                    pages.push(
                        <li className={currentPage===i?'activePage':null} key={i} onClick={this.pageClick.bind(this,i)}>
                            {i}
                        </li>
                    );
                }
            }

            if(totalPage-startPage>=groupCount +1){
                pages.push(
                    <li className={currentPage===totalPage?'activePage':null} 
                        key={totalPage} 
                        onClick ={this.pageClick.bind(this)}>
                        ...
                    </li>
                );
            }

            pages.push(
                <li className={currentPage === totalPage ? "activePage" : null} 
                    key={totalPage}
                    onClick={this.pageClick.bind(this, totalPage)}>
                    {totalPage}
                </li>)
        }



        pages.push(
            <li className={currentPage==totalPage?'nomore':null} 
                key={totalPage+1}
                onClick={this.nextpagehandler.bind(this)}>
                下一页
            </li>
        );
        return pages;
    }

    render(){
        const pageList = this.createPage();
        return(
            <ul className='page-container'>
                {pageList}
            </ul>
        );
    }
}

export default Pagecomponent;



