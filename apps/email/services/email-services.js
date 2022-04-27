import { storageService } from '../../../services/storage.service.js'

export const emailService = {

    getEmails,
    query,
    
}

const EMAIL_KEY = 'mister_email'

const txt = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis accusantium ipsum architecto vel amet quibusdam veniam ullam, quisquam fugiat ab, quam dolores! Dolore quibusdam exercitationem minima labore reprehenderit commodi necessitatibus!'

const defaultEmails = [{
    to: null,
    date: new Date(),
    id: makeId(),
    title: 'test email 1',
    subject: 'subject',
    folder: 'inbox',
    lables: [],
    isStar: (Math.random() > 0.5) ? false : true,
    isRead: (Math.random() > 0.5) ? false : true,
    txt: txt
}, 
{
    to: null,
    date: new Date(),
    id: makeId(),
    title: 'test email 2',
    subject: 'subject',
    folder: 'inbox',
    lables: [],
    isStar: (Math.random() > 0.5) ? false : true,
    isRead: (Math.random() > 0.5) ? false : true,
    txt: txt
}, 
{
    to: null,
    date: new Date(),
    id: makeId(),
    title: 'test email 3',
    subject: 'subject',
    folder: 'inbox',
    lables: [],
    isStar: (Math.random() > 0.5) ? false : true,
    isRead: (Math.random() > 0.5) ? false : true,
    txt: txt
}, 
{
    to: null,
    date: new Date(),
    id: makeId(),
    title: 'test email 4',
    subject: 'subject',
    folder: 'inbox',
    lables: [],
    isStar: (Math.random() > 0.5) ? false : true,
    isRead: (Math.random() > 0.5) ? false : true,
    txt: txt
}, 

]

function getEmails() {

    let emails = storageService.loadFromStorage(EMAIL_KEY)
    if (!emails) {
        emails = defaultEmails
        storageService.saveToStorage(emails)
    }
  
    return emails
}


function makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

function query(filterBy) {

    console.log('querry', filterBy);
    
    let emails = getDefaultEmails()

    if (filterBy) {
            let { title } = filterBy
            emails = email.filter(email => 
            email.title.includes(title))
            }
     
        

    return Promise.resolve(emails)
}