@extends('admin.layout')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                @if(Session::has('status'))
                    <div class="alert alert-success" role="alert">
                        {{ Session::get('status') }}
                    </div>
                @endif
                    <h1>Аналитика / Промокоды</h1>
                    <div class="row">
                        <div class="mt-4 col-md-12">
                            <div class="table-responsive">
                                <table class="table table-hover">
                                    <thead class="table-dark">
                                    <tr>
                                        <th scope="col" style="width: 25%">Промокод</th>
                                        <th scope="col" style="width: 40%">Описание</th>
                                        <th scope="col">Тип</th>
                                        <th scope="col">Количество использований</th>
                                        <th scope="col">Общий сумма (с скидкой)</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach ($usedPromocodes as $promocode => $usedPromocode)
                                        <tr>
                                            <td>{{$promocode}}</td>
                                            <td>{{$usedPromocode['description']}}</td>
                                            <td>{{$usedPromocode['type']}}</td>
                                            <td>{{$usedPromocode['numberOfUses']}}</td>
                                            <td>{{$usedPromocode['price']}}</td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
@endsection
