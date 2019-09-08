package br.com.teste.steps;

import com.dimensaozero.blog.basico.Elevador;
import com.dimensaozero.blog.basico.Pessoa;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Quando;
import org.junit.Assert;

public class ElevadorSteps {

    Elevador elevador = new Elevador();
    Pessoa pessoa = new Pessoa("Nome", 1);


    @Dado("^que o elevador está no térreo$")
    public void queOElevadorEstáNoTérreo() {
        elevador.setAndarAtual(0);
        System.out.println("O elevador está no andar: " + elevador.getAndarAtual());
    }

    @Dado("^que o passageiro \"([^\"]*)\" que está no (\\d+)º andar chamou o elevador$")
    public void passageiroChamaElevador(String passageiro, int andar) {

        pessoa.setNome(passageiro);

        elevador.setAndarAtual(andar);
        System.out.println("O elevador está no andar: " + elevador.getAndarAtual());
        elevador.adicionaPessoa(pessoa);
        System.out.println("Total de passageiros: " + elevador.getNumeroDePessoas());
    }

    @Quando("^o elevador subir para o (\\d+)º andar$")
    public void elevadorSubirParaOAndar(int andar) throws Throwable {
        elevador.setAndarAtual(andar);
        System.out.println("Andar atual: " + elevador.getAndarAtual());
    }

    @E("^deve ser possível editar a idade dela$")
    public void deveSerPossívelEditarAIdadeDela() {
        System.out.println("Idade atual: " + pessoa.getIdade());
        pessoa.setIdade(40);
        System.out.println("Idade alterada: " + pessoa.getIdade());
        Assert.assertEquals(40, pessoa.getIdade());
    }

    @E("^o elevador volta para o térreo$")
    public void oElevadorVoltaParaOTérreo() {
        System.out.println("Andar atual: " + elevador.getAndarAtual());
        elevador.setAndarAtual(0);
        System.out.println("Andar térreo: " + elevador.getAndarAtual());
        Assert.assertEquals(0, elevador.getAndarAtual());


    }

    @Quando("^o elevador chegar ao quinto andar$")
    public void oElevadorChegarAoQuintoAndar() throws Throwable {
        elevador.setAndarAtual(5);
        ;
        System.out.println("Andar atual: " + elevador.getAndarAtual());
        Assert.assertEquals(5, elevador.getAndarAtual());

    }
}
