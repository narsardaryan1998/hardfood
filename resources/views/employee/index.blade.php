@extends('admin.layout')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-4 col-6">
            <!-- small card -->
            <div class="small-box bg-info">
              <div class="inner">
{{--                <h3>{{count($kassa)}}</h3>--}}
                <p>Всего заказов</p>
              </div>
              <div class="icon">
                <i class="fa fa-shopping-cart"></i>
              </div>

            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-4 col-6">
            <!-- small card -->
            <div class="small-box bg-danger">
              <div class="inner">
{{--                <h3>{{count($current_orders)}}</h3>--}}
                <p>Заказов сегодня</p>
              </div>
              <div class="icon">
                <i class="ion ion-pie-graph"></i>
              </div>

            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-4 col-12">
            <!-- small card -->
            <div class="small-box bg-warning">
              <div class="inner">
{{--                <h3>{{count($users)}}</h3>--}}

                <p>Клиентов</p>
              </div>
              <div class="icon">
                <i class="ion ion-person-add"></i>
              </div>

            </div>
          </div>
          <!-- ./col -->

            <div class="col-md-12">



            </div>
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
@endsection

