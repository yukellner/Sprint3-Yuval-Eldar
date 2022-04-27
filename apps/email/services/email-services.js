import { storageService } from '../../../services/storage.service.js'

export const emailService = {

    getEmails,
    query,
    updateEmails,
    getById
    
}

const EMAIL_KEY = 'mister_email'

const txt = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis accusantium ipsum architecto vel amet quibusdam veniam ullam, quisquam fugiat ab, quam dolores! Dolore quibusdam exercitationem minima labore reprehenderit commodi necessitatibus!'

const defaultEmails = [{
    to: null,
    from: 'dude@gmail.com',
    date: new Date(),
    id: makeId(),
    title: 'tel aviv ',
    subject: 'subject',
    folder: 'inbox',
    labels: [],
    isStar: (Math.random() > 0.5) ? false : true,
    isRead: (Math.random() > 0.5) ? false : true,
    txt: txt
}, 
{
    to: null,
    from: 'commerical@gmail.com',
    date: new Date(),
    id: makeId(),
    title: 'sababa',
    subject: 'subject',
    folder: 'inbox',
    labels: [],
    isStar: (Math.random() > 0.5) ? false : true,
    isRead: (Math.random() > 0.5) ? false : true,
    txt: txt
}, 
{
    to: null,
    from: 'Spam@gmail.com',
    date: new Date(),
    id: makeId(),
    title: 'test email 3',
    subject: 'subject',
    folder: 'inbox',
    labels: [],
    isStar: (Math.random() > 0.5) ? false : true,
    isRead: (Math.random() > 0.5) ? false : true,
    txt: txt
}, 
{
    to: null,
    from: 'Lady@gmail.com',
    date: new Date(),
    id: makeId(),
    title: 'test email 4',
    subject: 'subject',
    folder: 'inbox',
    labels: [],
    isStar: (Math.random() > 0.5) ? false : true,
    isRead: (Math.random() > 0.5) ? false : true,
    txt: txt
}, 

]

function getEmails() {

    let emails = storageService.loadFromStorage(EMAIL_KEY)
    if (!emails) {
        emails = defaultEmails
        storageService.saveToStorage(EMAIL_KEY,emails)
    }
  
    return emails
}

function updateEmails(emails) {
    storageService.saveToStorage(EMAIL_KEY,emails)
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
    
    let emails = getEmails()

    if (filterBy) {
            let { title } = filterBy
            return Promise.resolve(emails.filter(email => {
                return email.title.includes(title)
            }))
        }
     
    return Promise.resolve(emails)
}

function getById(Id) {
    const emails = storageService.loadFromStorage(EMAIL_KEY)
    const email = emails.find((email) => Id === email.id);
    return Promise.resolve(email);
  }