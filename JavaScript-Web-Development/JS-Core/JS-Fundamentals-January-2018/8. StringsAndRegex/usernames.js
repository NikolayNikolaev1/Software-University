function usernames(emails) {
    let usernames = []

    for (let i = 0; i < emails.length; i++) {
        let tokens = emails[i].split('@')
        let domains = tokens[1].split('.')
        let username = tokens[0] + '.'

        for (let str of domains) {
            username += str[0]
        }

        usernames.push(username)
    }

    console.log(usernames.join(', '))
}

usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'])