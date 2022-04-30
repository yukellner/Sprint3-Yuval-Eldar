import { storageService } from "../../../services/storage.service.js";

export const emailService = {
  getEmails,
  query,
  queryStars,
  updateEmails,
  getById,
  markRead,
  sendMail,
  draftMail,
  testFunc,
  moveToTrash,
  toggleRead,
  addEmail,
  makeId,
};

const EMAIL_KEY = "mister_email";

const txt =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis accusantium ipsum architecto vel amet quibusdam veniam ullam, quisquam fugiat ab, quam dolores! Dolore quibusdam exercitationem minima labore reprehenderit commodi necessitatibus!";

const defaultEmails = [
  {
    to: null,
    from: "dude@gmail.com",
    date: new Date(),
    id: makeId(),
    title: "tel aviv ",
    folder: "inbox",
    labels: ['memes'],
    isStar: Math.random() > 0.5 ? false : true,
    isRead: Math.random() > 0.5 ? false : true,
    txt: txt,
  },
  {
    to: null,
    from: "commerical@gmail.com",
    date: new Date(),
    id: makeId(),
    title: "sababa",
    folder: "inbox",
    labels: ['work'],
    isStar: Math.random() > 0.5 ? false : true,
    isRead: Math.random() > 0.5 ? false : true,
    txt: txt,
  },
  {
    to: null,
    from: "Spam@gmail.com",
    date: new Date(),
    id: makeId(),
    title: "test email 3",
    folder: "inbox",
    labels: ['fun'],
    isStar: Math.random() > 0.5 ? false : true,
    isRead: Math.random() > 0.5 ? false : true,
    txt: txt,
  },
  {
    to: null,
    from: "Lady@gmail.com",
    date: new Date(),
    id: makeId(),
    title: "test email 4",
    folder: "inbox",
    labels: ['memes', 'critical'],
    isStar: Math.random() > 0.5 ? false : true,
    isRead: Math.random() > 0.5 ? false : true,
    txt: txt,
  },
  {
    to: null,
    from: "muki@gmail.com",
    date: new Date(),
    id: makeId(),
    title: "don't forget!",
    folder: "inbox",
    labels: ['work', 'critical'],
    isStar: Math.random() > 0.5 ? false : true,
    isRead: Math.random() > 0.5 ? false : true,
    txt: txt,
  },
  {
    to: null,
    from: "shlomo@gmail.com",
    date: new Date(),
    id: makeId(),
    title: "have you seen Puki? ",
    folder: "draft",
    labels: ['memes', 'critical'],
    isStar: Math.random() > 0.5 ? false : true,
    isRead: Math.random() > 0.5 ? false : true,
    txt: txt,
  },
  {
    to: null,
    from: "shraga@gmail.com",
    date: new Date(),
    id: makeId(),
    title: "yo yo  ",
    folder: "draft",
    labels: ['memes', 'fun'],
    isStar: Math.random() > 0.5 ? false : true,
    isRead: Math.random() > 0.5 ? false : true,
    txt: txt,
  },
  {
    to: null,
    from: "shraga@gmail.com",
    date: new Date(),
    id: makeId(),
    title: "nice one! ",
    folder: "trash",
    labels: ['memes', 'fun'],
    isStar: Math.random() > 0.5 ? false : true,
    isRead: Math.random() > 0.5 ? false : true,
    txt: txt,
  },
  {
    to: null,
    from: "shraga@gmail.com",
    date: new Date(),
    id: makeId(),
    title: "can you please... ",
    folder: "sent",
    labels: ['bills', 'fun'],
    isStar: Math.random() > 0.5 ? false : true,
    isRead: Math.random() > 0.5 ? false : true,
    txt: txt,
  },
];

function getEmails() {
  let emails = storageService.loadFromStorage(EMAIL_KEY);
  if (!emails) {
    emails = defaultEmails;
    storageService.saveToStorage(EMAIL_KEY, emails);
  }

  return emails;
}

function updateEmails(emails) {
  storageService.saveToStorage(EMAIL_KEY, emails);
}

function makeId(length = 6) {
  var txt = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return txt;
}

function query(filterBy) {
  let emails = getEmails();

  if (filterBy) {
      if (filterBy.isStar) {
        emails = emails.filter((email) => email.isStar);
    }
    if (filterBy.folder) {
      emails = emails.filter((email) => email.folder === filterBy.folder)
    }
    let { title } = filterBy;
    emails = emails.filter((email) => {
      return email.title.includes(title);
    });
  } else return Promise.resolve(emails);

  return Promise.resolve(emails);
}

function queryStars(filterBy) {
    let emails = getEmails();
    
    if (filterBy) {
        emails = emails.filter((email) => email.isStar);
    }
    
    console.log(emails);
  return Promise.resolve(emails);
}

function getById(Id) {
  const emails = storageService.loadFromStorage(EMAIL_KEY);
  const email = emails.find((email) => Id === email.id);
  return Promise.resolve(email);
}

function markRead(id) {
  const emails = getEmails();
  const index = emails.findIndex((email) => email.id === id);
  emails[index].isRead = true;
  updateEmails(emails);
}

function toggleRead(id) {
  const emails = getEmails()
  const index = emails.findIndex((email) => email.id === id)
  emails[index].isRead = !emails[index].isRead
  updateEmails(emails)
  
}

function moveToTrash(id) {
  const emails = getEmails();
  const index = emails.findIndex((email) => email.id === id);
  emails[index].folder = 'trash';
  updateEmails(emails);
}

function sendMail(email) {
  const sentEmail =  {
    to: email.to,
    from: 'you@gmail.com',
    date: new Date(),
    id: makeId(),
    title: email.title,
    folder: "sent",
    labels: email.labels,
    isStar: false ,
    isRead: true,
    txt: email.txt,
  }
  const emails = getEmails()
  emails.push(sentEmail)
  storageService.saveToStorage(EMAIL_KEY,emails)

}

function draftMail(email) {
  const sentEmail =  {
    to: email.to,
    from: 'you',
    date: new Date(),
    id: makeId(),
    title: email.title,
    folder: "draft",
    labels: email.labels,
    isStar: false ,
    isRead: true,
    txt: email.txt,
  }
  const emails = getEmails()
  emails.push(sentEmail)
  storageService.saveToStorage(EMAIL_KEY,emails)

}

function testFunc() {
  console.log('test function');
}

function addEmail(email) {
  const emails = getEmails()
  emails.push(email)
  storageService.saveToStorage(EMAIL_KEY,emails)
}
