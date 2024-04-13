export const AddPizzaFlavour = () => {
    return (
        <form>
            <form>
                <div class="form-group">
                    <input type="text" class="form-control" id="inputName" placeholder="Nome do sabor" />
                </div>
                <div class="form-group">
                    <textarea class="form-control" id="descriptionArea" rows="3" placeholder="Descrição do sabor"></textarea>
                </div>
                <form>
                    <div class="form-group">
                        <label for="exampleFormControlFile1">Imagem do sabor</label>
                        <input type="file" class="form-control-file" id="imageArea"/>
                    </div>
                </form>
                <button type="submit" class="btn btn-primary">Adicionar sabor</button>
            </form>
        </form>
    )
}