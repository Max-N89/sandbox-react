import React from "react";

function Mailbox(props) {
    const {inboxMessages} = props;

    return (
        <section>
            <h2>Inbox messages</h2>
            {
                inboxMessages?.length && (
                    <p>
                        {/*You have {inboxMessages.length} incoming*/}
                        {/*message{inboxMessages.length === 1? false : "s"}.*/}
                        {/*{inboxMessages.length === 1 ? " message" : " messages"}.*/}
                        {
                            `You have ${inboxMessages.length} incoming message${inboxMessages.length === 1? "" : "s"}`
                        }
                    </p>
                )
            }
        </section>
    );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];

export {Mailbox, messages};
