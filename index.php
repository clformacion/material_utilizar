<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1"/>
		<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css"/>
		<link rel="stylesheet" type="text/css" href="assets/css/offcanvas.css"/>
	</head>
<body>

<header>
<?php include 'header.php'?>

</header>

<main class="container">
  <div class="d-flex align-items-center p-3 my-3 text-white bg-primary rounded shadow-sm" >

   
      <h1 style="text-align: center;" >Coordinacion de horarios y profesores</h1>
 
  </div>

  <div class="my-3 p-3 bg-body rounded shadow-sm">
    <h6 class="border-bottom pb-2 mb-0">
    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#form_modal"> Agregar personal</button>
    </h6>

    <div class="d-flex text-muted pt-3">
<table class="table table-bordered">
			<thead class="btn-primary">
				<tr>
					<th>#</th>
					<th>Nombre</th>
					<th>Apellidos</th>
					<th>Horario</th>
					<th>Programas</th>
				</tr>
			</thead>
			<tbody style="background-color:#fff;">
<?php
	require 'config.php';
    $query = $db->prepare("SELECT * FROM personal");
    $query->execute();
    
	if($query->rowCount() == 0){
				echo '<tr>
						<td colspan="4"></td>
				     </tr>';
			 
				}else {
				$n=0;
				$data = $query->fetchAll();
				foreach ($data as $value): 
				$n++;   
				echo '<tr>
						<td>'.$n.'</td>
						<td>'.$value["nombres"].'</td>
						<td>'.$value["apellidos"].'</td>
						<td>'.$value["pais"].'</td>
						<td>'.$value["programas"].'</td>
				     </tr>';
			 endforeach;	
				}
				$db = null;
				?>
			</tbody>
		</table>

    </div>
  </div>
</main>


<div class="modal fade" id="form_modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header btn-primary">
        <h5 class="modal-title" id="exampleModalLabel">horario Programador</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form action="insertar.php" method="POST">
      <div class="modal-body">        	
		<div class="col-md-12">
            <div class="form-group">
                <label>Nombres:</label>
                <input type="text" class="form-control" name="nombres" required="required"/>
            </div>
            <div class="form-group">
                <label>Apellidos:</label>
                <input type="text" class="form-control" name="apellidos" required="required"/>
            </div>
            <div class="form-group">
                <label>horario:</label>
                <input type="text" class="form-control" name="pais" required="required"/>
            </div>
            <div class="form-group">
                <label>Programas:</label>
            </div>
								
			<div class="card bg-light" style="width: 100%;">
  <div class="card-body">
  <div class="row">
<!-- checkbox -->
<div class="col-md-6">
<div class="custom-control custom-checkbox mr-sm-2">
        <label><input type="checkbox" name="programas[]" value="C" > C</label>
</div>
</div>
<!-- End: checkbox -->
<!-- checkbox -->
<div class="col-md-6">
<div class="custom-control custom-checkbox mr-sm-2">
                <label><input type="checkbox" name="programas[]" value="C++" > C++</label>
</div>      
</div>
<!-- End: checkbox -->
<!-- checkbox -->
<div class="col-md-6">
<div class="custom-control custom-checkbox mr-sm-2">
                <label><input type="checkbox" name="programas[]" value="PHP" > PHP</label>
</div>      
</div>
<!-- End: checkbox -->
<!-- checkbox -->
<div class="col-md-6">
<div class="custom-control custom-checkbox mr-sm-2">
                <label><input type="checkbox" name="programas[]" value="Python" > Python</label>
</div>      
</div>
<!-- End: checkbox -->
<!-- checkbox -->
<div class="col-md-6">
<div class="custom-control custom-checkbox mr-sm-2">
                <label><input type="checkbox" name="programas[]" value="Java" > Java</label>
</div>      
</div>
<!-- End: checkbox -->
<!-- checkbox -->
<div class="col-md-6">
<div class="custom-control custom-checkbox mr-sm-2">
               <label><input type="checkbox" name="programas[]" value="Ruby" > Ruby</label>
</div>      
</div>
<!-- End: checkbox -->
<!-- checkbox -->
<div class="col-md-6">
<div class="custom-control custom-checkbox mr-sm-2">
                <label><input type="checkbox" name="programas[]" value="Swift" > Swift</label>
</div>      
</div>
<!-- End: checkbox -->
<!-- checkbox -->
<div class="col-md-6">
<div class="custom-control custom-checkbox mr-sm-2">
                <label><input type="checkbox" name="programas[]" value="JavaScript" > JavaScript</label>
</div>      
</div>
<!-- End: checkbox -->
<!-- checkbox -->
<div class="col-md-6">
<div class="custom-control custom-checkbox mr-sm-2">
                <label><input type="checkbox" name="programas[]" value="Kotlin" > Kotlin</label>
</div>      
</div>
<!-- End: checkbox -->
<!-- checkbox -->
<div class="col-md-6">
<div class="custom-control custom-checkbox mr-sm-2">
               <label><input type="checkbox" name="programas[]" value="Go" > Go</label>
</div>      
</div>
<!-- End: checkbox -->

</div>
</div>
</div>	
	</div>
	  </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button name="guardar" type="submit" class="btn btn-primary">Registrar Ahora</button>
      </div>
      </form>
      </div>
    </div>
  </div>
</div>

   <footer  style="margin-top: 300px;">

   <?php include'footer.php'?>
   </footer> 

</body>
<script src="assets/js/jquery-3.6.0.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
</html>