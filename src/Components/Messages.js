import React from 'react'
import './Messages.scss';

const Messages = () => {
    return (
        <>
            <div class="wrapper">
                <article class="alert">
                    <div class="alert__wrapper">
                        <div class="alert__header">
                            <h3>
                                <span>
                                    <i class="fa fa-exclamation"></i>
                                </span>
                                <span>DEFAULT</span>
                            </h3>
                        </div>
                        <div class="alert__body">
                            <p>
                                Just a plain old grey. Could be used for disabled and/or non-hovering
                            </p>
                        </div>
                    </div>
                </article>
                <article class="alert info">
                    <div class="alert__wrapper">
                        <div class="alert__header">
                            <h3>
                                <span>
                                    <i class="fa fa-exclamation"></i>
                                </span>
                                <span>This is just some information.</span>
                            </h3>
                        </div>
                        <div class="alert__body">
                            <p>
                                Like it says in the heading, this is just some info man.
                            </p>
                        </div>
                    </div>
                </article>
                <article class="alert success">
                    <div class="alert__wrapper">
                        <div class="alert__header">
                            <h3>
                                <span>
                                    <i class="fa fa-check"></i>
                                </span>
                                <span>Success! You did it.</span>
                            </h3>
                        </div>
                        <div class="alert__body">
                            <p>
                                Now you've gone and done it! That's the spirit.
                            </p>
                        </div>
                    </div>
                </article>
                <article class="alert warning">
                    <div class="alert__wrapper">
                        <div class="alert__header">
                            <h3>
                                <span>
                                    <i class="fa fa-exclamation-triangle"></i>
                                </span>
                                <span>Warning! This is your last chance.</span>
                            </h3>
                        </div>
                        <div class="alert__body">
                            <p>
                                Hurry up! Before it's too late. There's no time like the present.
                            </p>
                        </div>
                    </div>
                </article>
                <article class="alert error">
                    <div class="alert__wrapper">
                        <div class="alert__header">
                            <h3>
                                <span>
                                    <i class="fa fa-exclamation-circle"></i>
                                </span>
                                <span>Oh No! an Error.</span>
                            </h3>
                        </div>
                        <div class="alert__body">
                            <p>
                                Something happened...
                                I don't know what to tell you...
                                you need to fix it.
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </>



    )
}

export default Messages