class Player {
    id: string;
    type: string;
    username: string;
    playerid: string;
    level: number;
    title: string;
    skill: number;
    accounttype: string;
    ts: number;
    products: Record<string, any>;
    ciphertext: string;
    clan_id: number;
    clan_name: string;
    clan_role: string;
    addr: string;
    version: string;
  
    constructor(input: string | Record<string, any>) {
      const data = typeof input === "string" ? JSON.parse(input) : input;
  
      this.id = data.id || "";
      this.type = data.type || "credential";
      this.username = data.username || "";
      this.playerid = data.playerid || "";
      this.level = data.level || 0;
      this.title = data.title || "";
      this.skill = data.skill || 0;
      this.accounttype = data.accounttype || "";
      this.ts = data.ts || 0;
      this.products = data.products || {};
      this.ciphertext = data.ciphertext || "";
      this.clan_id = data.clan_id || -1;
      this.clan_name = data.clan_name || "";
      this.clan_role = data.clan_role || "";
      this.addr = data.addr || "";
      this.version = data.version || "";
    }
}

//curl functions
function sendGold(id:string, friendId:string, amount: string) {
    return `curl 'https://api2.ninja.io/user/gold' --compressed \\
    -X POST \\
    -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:133.0) Gecko/20100101 Firefox/133.0' -H 'Accept: */*' \\
    -H 'Accept-Language: en-US,en;q=0.5' \\
    -H 'Accept-Encoding: gzip, deflate, br, zstd' \\
    -H 'Content-Type: application/json;charset=UTF-8' \\
    -H 'Client-Version: 0.3.3' \\
    -H 'Origin: https://ninja.io' \\
    -H 'DNT: 1' \\
    -H 'Sec-GPC: 1' \\
    -H 'Connection: keep-alive' \\
    -H 'Referer: https://ninja.io/' \\
    -H 'Sec-Fetch-Dest: empty' \\
    -H 'Sec-Fetch-Mode: cors' \\
    -H 'Sec-Fetch-Site: same-site' \\
    -H 'Priority: u=0' \\
    --data-raw '{"friendId":"${friendId}","amount":${amount},"id":"${id}"}'
    `.trim();
}

function invite(id: string, friendName: string): string {
    return `curl 'https://api2.ninja.io/user/invite' --compressed \\
    -X POST \\
    -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:133.0) Gecko/20100101 Firefox/133.0' \\
    -H 'Accept: */*' \\
    -H 'Accept-Language: en-US,en;q=0.5' \\
    -H 'Accept-Encoding: gzip, deflate, br, zstd' \\
    -H 'Content-Type: application/json;charset=UTF-8' \\
    -H 'Client-Version: 0.3.3' \\
    -H 'Origin: https://ninja.io' \\
    -H 'DNT: 1' -H 'Sec-GPC: 1' \\
    -H 'Connection: keep-alive' \\
    -H 'Referer: https://ninja.io/' \\
    -H 'Sec-Fetch-Dest: empty' \\
    -H 'Sec-Fetch-Mode: cors' \\
    -H 'Sec-Fetch-Site: same-site' \\
    -H 'Priority: u=0' \\
    --data-raw '{"name":"${friendName}","id":"${id}"}'
    `.trim();
}

function accept(id:string, friendId: string): string {
    return `curl 'https://api2.ninja.io/user/accept' --compressed \\
    -X POST \\
    -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:133.0) Gecko/20100101 Firefox/133.0' \\
    -H 'Accept: */*' \\
    -H 'Accept-Language: en-US,en;q=0.5' \\
    -H 'Accept-Encoding: gzip, deflate, br, zstd' \\
    -H 'Content-Type: application/json;charset=UTF-8' \\
    -H 'Client-Version: 0.3.3' \\
    -H 'Origin: https://ninja.io' \\
    -H 'DNT: 1' \\
    -H 'Sec-GPC: 1' \\
    -H 'Connection: keep-alive' \\
    -H 'Referer: https://ninja.io/' \\
    -H 'Sec-Fetch-Dest: empty' \\
    -H 'Sec-Fetch-Mode: cors' \\
    -H 'Sec-Fetch-Site: same-site' \\
    -H 'Priority: u=0' \\
    --data-raw '{"friendId":"${friendId}","id":"${id}"}'
    `.trim();
}

function signUp(username: string, password: string): string {
    return `curl 'https://api2.ninja.io/user/register' --compressed \\
        -X POST \\
        -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:133.0) Gecko/20100101 Firefox/133.0' \\
        -H 'Accept: */*' \\
        -H 'Accept-Language: en-US,en;q=0.5'  \\
        -H 'Accept-Encoding: gzip, deflate, br, zstd' \\
        -H 'Content-Type: application/json;charset=UTF-8' \\
        -H 'Client-Version: 0.3.3' \\
        -H 'Origin: https://ninja.io' \\
        -H 'DNT: 1' \\
        -H 'Sec-GPC: 1' \\
        -H 'Connection: keep-alive' \\
        -H 'Referer: https://ninja.io/' \\
        -H 'Sec-Fetch-Dest: empty' \\
        -H 'Sec-Fetch-Mode: cors' \\
        -H 'Sec-Fetch-Site: same-site' \\
        -H 'Priority: u=0'  \\
        --data-raw '{"name":"${username}","email":"","password":"${password}"}'
    `.trim();
}

function logIn(username: string, password: string): string {
    return `curl 'https://api2.ninja.io/user/login' --compressed \\
    -X POST \\
    -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:133.0) Gecko/20100101 Firefox/133.0' \\
    -H 'Accept: */*' \\
    -H 'Accept-Language: en-US,en;q=0.5' \\
    -H 'Accept-Encoding: gzip, deflate, br, zstd' \\
    -H 'Content-Type: application/json;charset=UTF-8' \\
    -H 'Client-Version: 0.3.3' \\
    -H 'Origin: https://ninja.io' \\
    -H 'DNT: 1' -H 'Sec-GPC: 1' \\
    -H 'Connection: keep-alive' \\
    -H 'Referer: https://ninja.io/' \\
    -H 'Sec-Fetch-Dest: empty' \\
    -H 'Sec-Fetch-Mode: cors' \\
    -H 'Sec-Fetch-Site: same-site' \\
    -H 'Priority: u=0' \\
    --data-raw '{"name":"${username}","password":"${password}"}'
    `.trim();
}

function getGold(id: string): string {
    return `curl 'https://api2.ninja.io/user/reward-shop' --compressed \\
    -X POST \\
    -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:133.0) Gecko/20100101 Firefox/133.0' \\
    -H 'Accept: */*' \\
    -H 'Accept-Language: en-US,en;q=0.5' \\
    -H 'Accept-Encoding: gzip, deflate, br, zstd' \\
    -H 'Content-Type: application/json;charset=UTF-8' \\
    -H 'Client-Version: 0.3.3' \\
    -H 'Origin: https://ninja.io' \\
    -H 'DNT: 1' \\
    -H 'Sec-GPC: 1' \\
    -H 'Connection: keep-alive' \\
    -H 'Referer: https://ninja.io/' \\
    -H 'Sec-Fetch-Dest: empty' \\
    -H 'Sec-Fetch-Mode: cors' \\
    -H 'Sec-Fetch-Site: same-site' \\
    --data-raw '{"id":"${id}"}'`
}

function getFriends(id: string): string {
    return `curl 'https://api2.ninja.io/user/friends/${id}' --compressed \\
    -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:133.0) Gecko/20100101 Firefox/133.0' \\
    -H 'Accept: */*' \\
    -H 'Accept-Language: en-US,en;q=0.5' \\
    -H 'Accept-Encoding: gzip, deflate, br, zstd' \\
    -H 'Client-Version: 0.3.3' \\
    -H 'Origin: https://ninja.io' \\
    -H 'DNT: 1' \\
    -H 'Sec-GPC: 1' \\
    -H 'Connection: keep-alive' \\
    -H 'Referer: https://ninja.io/' \\
    -H 'Sec-Fetch-Dest: empty' \\
    -H 'Sec-Fetch-Mode: cors' \\
    -H 'Sec-Fetch-Site: same-site'`.trim();
}

function goldAmount(id: string): string {
    return `curl 'https://api2.ninja.io/user/currency/${id}' \\
  -H 'Accept: */*' \\
  -H 'Accept-Language: en-US,en;q=0.9' \\
  -H 'Client-Version: 0.3.3' \\
  -H 'Connection: keep-alive' \\
  -H 'Origin: https://ninja.io' \\
  -H 'Referer: https://ninja.io/' \\
  -H 'Sec-Fetch-Dest: empty' \\
  -H 'Sec-Fetch-Mode: cors' \\
  -H 'Sec-Fetch-Site: same-site' \\
  -H 'User-Agent: Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36' \\
  -H 'sec-ch-ua: "Not-A.Brand";v="99", "Chromium";v="124"' \\
  -H 'sec-ch-ua-mobile: ?0' \\
  -H 'sec-ch-ua-platform: "Android"' \\
  --compressed`.trim();
} 

//helper
async function tor(cmd: string): Promise<string> {
    const restart = Bun.spawn(["service", "tor", "restart"]);
    await restart.exited;
  
    const searcher = Bun.spawn(["bash", "-c", "torify " + cmd]);
    const output = await new Response(searcher.stdout).text();
    return output;
}

async function command(cmd: string): Promise<string> {
    const proc = Bun.spawn(["bash", "-c", cmd]);
    await proc.exited;
    return await new Response(proc.stdout).text();
}

//tor and console.log()
async function use(cmd: string): Promise<string> {
    const result: string = await tor(cmd);
    console.log(result);
    return result;
}
