<template>
  <div>
      <!-- modal opinar -->
    <!-- Modal Personaje -->
    <div class="modal fade" id="opinarPersonajeModal" tabindex="-1" role="dialog" aria-labelledby="opinarPersonajeModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="opinarPersonajeModalLabel">Opinar</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-12">
                  <form>
                    <div class="form-group">
                      <label for="tuNombre">Tu nombre:</label>
                      <input type="email" class="form-control" id="tuNombre"  placeholder="Ingresa tu nombre">
                    </div>
                    <div class="form-group">
                      <label for="tuOpinion">Tu Opinion</label>
                      <textarea class="form-control" id="tuOpinion" rows="3"></textarea>
                    </div>

                  </form>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary">Guardar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Opinar'
}
</script>
