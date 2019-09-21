function main() {
    const N = 30;
    let regex = /@gmail.com$/;
    let names = [];
    const data = `riya riya@gmail.com
julia julia@julia.me
julia sjulia@gmail.com
julia julia@gmail.com
samantha samantha@gmail.com
tanya tanya@gmail.com
riya ariya@gmail.com
julia bjulia@julia.me
julia csjulia@gmail.com
julia djulia@gmail.com
samantha esamantha@gmail.com
tanya ftanya@gmail.com
riya riya@live.com
julia julia@live.com
julia sjulia@live.com
julia julia@live.com
samantha samantha@live.com
tanya tanya@live.com
riya ariya@live.com
julia bjulia@live.com
julia csjulia@live.com
julia djulia@live.com
samantha esamantha@live.com
tanya ftanya@live.com
riya gmail@riya.com
priya priya@gmail.com
preeti preeti@gmail.com
alice alice@alicegmail.com
alice alice@gmail.com
alice gmail.alice@gmail.com`;
    let lines = data.split('\n');
    for (let NItr = 0; NItr < N; NItr++) {
        const firstNameEmailID = lines[NItr].split(' ');
        const firstName = firstNameEmailID[0];
        const emailID = firstNameEmailID[1];
        const gmail = regex.exec(emailID);
        if (gmail) names.push(firstName);
    }
    names.sort();
    names.forEach(name => console.log(name));
}
console.log("Starting");
main();