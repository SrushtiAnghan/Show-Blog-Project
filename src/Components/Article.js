import React from 'react'
import './Article.scss';

const Article = () => {
    return (
        <>
<div class="card">
        <div class="card-body">
            <div class="card-quote">
                <img src="https://rvs-quotes-generator.vercel.app/quote.svg" alt=""/>
            </div>
            <div class="card-content" id="quoteText">You must do the thing you think you cannot do.</div>
        </div>
        <div class="card-footer">
            <div class="card-title" id="quoteTitle">Eleanor Roosevelt</div>
            <div class="card-bottom">
                <a href="" id="quoteShare"><img src="https://rvs-quotes-generator.vercel.app/twitter.svg" alt=""/></a>
                <button id="newQuote">New Quote</button>
            </div>
        </div>
    </div>
        </>
    )
}

export default Article