var Reader = require("./ReaderCsv")
var Processor = require("./Processor")
var Table = require("./Table")
var HtmlParser = require("./HtmlParser")
var Writer = require("./Writer")

var leitor = new Reader()
var escritor = new Writer()

async function main(){
    var dados = await leitor.readCsv("./caminho")
    var dadosProcessados = Processor.process(dados)

    var usuarios = new Table(dadosProcessados)
    var html = await HtmlParser.parse(usuarios)

    escritor.write(Date.now() + ".html", html)
}

main()
