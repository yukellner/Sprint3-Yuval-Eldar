

export const emailService = {

    getDefaultEmails
}

const defaultEmails = [{
    to: null,
    date: new Date(),
    id: makeId(),
    title: 'test email 1',
    subject: 'subject',
    folder: 'inbox',
    isStar: false,
    isRead: false,
    txt: 'txt'
}, 
{
    to: null,
    date: new Date(),
    id: makeId(),
    title: 'test email 2',
    subject: 'subject',
    folder: 'inbox',
    isStar: true,
    isRead: false,
    txt: 'txt'
},
{
    to: null,
    date: new Date(),
    id: makeId(),
    title: 'test email 3',
    subject: 'subject',
    folder: 'inbox',
    isStar: false,
    isRead: true,
    txt: 'txt'
},{
    to: null,
    date: new Date(),
    id: makeId(),
    title: 'test email 4',
    subject: 'subject',
    folder: 'inbox',
    isStar: false,
    isRead: false,
    txt: 'txt'
},{
    to: null,
    date: new Date(),
    id: makeId(),
    title: 'test email 5',
    subject: 'subject',
    folder: 'inbox',
    isStar: false,
    isRead: false,
    txt: 'txt'
},]

function getDefaultEmails() {
    console.log('hello from service');
    return defaultEmails
}


function makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}